import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1049Component } from './test-component1049.component';

describe('TestComponent1049Component', () => {
  let component: TestComponent1049Component;
  let fixture: ComponentFixture<TestComponent1049Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1049Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
