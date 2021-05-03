import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3015Component } from './test-component3015.component';

describe('TestComponent3015Component', () => {
  let component: TestComponent3015Component;
  let fixture: ComponentFixture<TestComponent3015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3015Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
