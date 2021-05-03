import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3239Component } from './test-component3239.component';

describe('TestComponent3239Component', () => {
  let component: TestComponent3239Component;
  let fixture: ComponentFixture<TestComponent3239Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3239Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
