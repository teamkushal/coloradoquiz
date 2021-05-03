import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3135Component } from './test-component3135.component';

describe('TestComponent3135Component', () => {
  let component: TestComponent3135Component;
  let fixture: ComponentFixture<TestComponent3135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3135Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
