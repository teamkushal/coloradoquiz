import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2012Component } from './test-component2012.component';

describe('TestComponent2012Component', () => {
  let component: TestComponent2012Component;
  let fixture: ComponentFixture<TestComponent2012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2012Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
