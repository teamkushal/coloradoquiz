import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2009Component } from './test-component2009.component';

describe('TestComponent2009Component', () => {
  let component: TestComponent2009Component;
  let fixture: ComponentFixture<TestComponent2009Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2009Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
