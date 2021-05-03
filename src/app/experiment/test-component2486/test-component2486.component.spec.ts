import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2486Component } from './test-component2486.component';

describe('TestComponent2486Component', () => {
  let component: TestComponent2486Component;
  let fixture: ComponentFixture<TestComponent2486Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2486Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
