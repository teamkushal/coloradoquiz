import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2600Component } from './test-component2600.component';

describe('TestComponent2600Component', () => {
  let component: TestComponent2600Component;
  let fixture: ComponentFixture<TestComponent2600Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2600Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
