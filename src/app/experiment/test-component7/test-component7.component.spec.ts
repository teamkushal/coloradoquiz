import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent7Component } from './test-component7.component';

describe('TestComponent7Component', () => {
  let component: TestComponent7Component;
  let fixture: ComponentFixture<TestComponent7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
