import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2011Component } from './test-component2011.component';

describe('TestComponent2011Component', () => {
  let component: TestComponent2011Component;
  let fixture: ComponentFixture<TestComponent2011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2011Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
