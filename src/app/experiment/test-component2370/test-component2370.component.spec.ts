import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2370Component } from './test-component2370.component';

describe('TestComponent2370Component', () => {
  let component: TestComponent2370Component;
  let fixture: ComponentFixture<TestComponent2370Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2370Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
