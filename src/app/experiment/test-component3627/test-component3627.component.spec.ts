import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3627Component } from './test-component3627.component';

describe('TestComponent3627Component', () => {
  let component: TestComponent3627Component;
  let fixture: ComponentFixture<TestComponent3627Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3627Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
