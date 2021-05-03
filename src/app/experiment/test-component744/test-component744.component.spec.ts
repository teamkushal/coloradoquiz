import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent744Component } from './test-component744.component';

describe('TestComponent744Component', () => {
  let component: TestComponent744Component;
  let fixture: ComponentFixture<TestComponent744Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent744Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
