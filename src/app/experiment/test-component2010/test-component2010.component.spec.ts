import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2010Component } from './test-component2010.component';

describe('TestComponent2010Component', () => {
  let component: TestComponent2010Component;
  let fixture: ComponentFixture<TestComponent2010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
