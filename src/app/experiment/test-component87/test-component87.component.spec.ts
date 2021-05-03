import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent87Component } from './test-component87.component';

describe('TestComponent87Component', () => {
  let component: TestComponent87Component;
  let fixture: ComponentFixture<TestComponent87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent87Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
