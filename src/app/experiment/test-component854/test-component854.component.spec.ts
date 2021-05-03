import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent854Component } from './test-component854.component';

describe('TestComponent854Component', () => {
  let component: TestComponent854Component;
  let fixture: ComponentFixture<TestComponent854Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent854Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
