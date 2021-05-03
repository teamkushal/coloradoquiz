import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2915Component } from './test-component2915.component';

describe('TestComponent2915Component', () => {
  let component: TestComponent2915Component;
  let fixture: ComponentFixture<TestComponent2915Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2915Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
