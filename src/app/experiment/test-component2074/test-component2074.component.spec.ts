import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2074Component } from './test-component2074.component';

describe('TestComponent2074Component', () => {
  let component: TestComponent2074Component;
  let fixture: ComponentFixture<TestComponent2074Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2074Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
