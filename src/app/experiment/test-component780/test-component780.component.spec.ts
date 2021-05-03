import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent780Component } from './test-component780.component';

describe('TestComponent780Component', () => {
  let component: TestComponent780Component;
  let fixture: ComponentFixture<TestComponent780Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent780Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
