import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2003Component } from './test-component2003.component';

describe('TestComponent2003Component', () => {
  let component: TestComponent2003Component;
  let fixture: ComponentFixture<TestComponent2003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
