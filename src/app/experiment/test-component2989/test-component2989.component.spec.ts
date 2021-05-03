import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2989Component } from './test-component2989.component';

describe('TestComponent2989Component', () => {
  let component: TestComponent2989Component;
  let fixture: ComponentFixture<TestComponent2989Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2989Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
