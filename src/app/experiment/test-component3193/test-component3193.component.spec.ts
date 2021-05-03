import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3193Component } from './test-component3193.component';

describe('TestComponent3193Component', () => {
  let component: TestComponent3193Component;
  let fixture: ComponentFixture<TestComponent3193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3193Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
