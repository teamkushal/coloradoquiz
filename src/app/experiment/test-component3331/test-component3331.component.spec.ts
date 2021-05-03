import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3331Component } from './test-component3331.component';

describe('TestComponent3331Component', () => {
  let component: TestComponent3331Component;
  let fixture: ComponentFixture<TestComponent3331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3331Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
