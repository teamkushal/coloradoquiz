import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2793Component } from './test-component2793.component';

describe('TestComponent2793Component', () => {
  let component: TestComponent2793Component;
  let fixture: ComponentFixture<TestComponent2793Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2793Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
