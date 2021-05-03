import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3724Component } from './test-component3724.component';

describe('TestComponent3724Component', () => {
  let component: TestComponent3724Component;
  let fixture: ComponentFixture<TestComponent3724Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3724Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
