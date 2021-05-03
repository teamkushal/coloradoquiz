import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3931Component } from './test-component3931.component';

describe('TestComponent3931Component', () => {
  let component: TestComponent3931Component;
  let fixture: ComponentFixture<TestComponent3931Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3931Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
