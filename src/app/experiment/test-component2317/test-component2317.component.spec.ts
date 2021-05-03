import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2317Component } from './test-component2317.component';

describe('TestComponent2317Component', () => {
  let component: TestComponent2317Component;
  let fixture: ComponentFixture<TestComponent2317Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2317Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
