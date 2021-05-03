import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent947Component } from './test-component947.component';

describe('TestComponent947Component', () => {
  let component: TestComponent947Component;
  let fixture: ComponentFixture<TestComponent947Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent947Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
