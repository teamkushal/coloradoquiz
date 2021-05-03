import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent355Component } from './test-component355.component';

describe('TestComponent355Component', () => {
  let component: TestComponent355Component;
  let fixture: ComponentFixture<TestComponent355Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent355Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
