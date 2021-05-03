import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2355Component } from './test-component2355.component';

describe('TestComponent2355Component', () => {
  let component: TestComponent2355Component;
  let fixture: ComponentFixture<TestComponent2355Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2355Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
