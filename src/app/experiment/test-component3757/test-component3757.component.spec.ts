import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3757Component } from './test-component3757.component';

describe('TestComponent3757Component', () => {
  let component: TestComponent3757Component;
  let fixture: ComponentFixture<TestComponent3757Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3757Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
