import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3988Component } from './test-component3988.component';

describe('TestComponent3988Component', () => {
  let component: TestComponent3988Component;
  let fixture: ComponentFixture<TestComponent3988Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3988Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
