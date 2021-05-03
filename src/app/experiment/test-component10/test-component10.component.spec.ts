import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent10Component } from './test-component10.component';

describe('TestComponent10Component', () => {
  let component: TestComponent10Component;
  let fixture: ComponentFixture<TestComponent10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
