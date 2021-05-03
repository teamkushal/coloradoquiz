import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2433Component } from './test-component2433.component';

describe('TestComponent2433Component', () => {
  let component: TestComponent2433Component;
  let fixture: ComponentFixture<TestComponent2433Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2433Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
