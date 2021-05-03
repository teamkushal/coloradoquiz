import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent770Component } from './test-component770.component';

describe('TestComponent770Component', () => {
  let component: TestComponent770Component;
  let fixture: ComponentFixture<TestComponent770Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent770Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
