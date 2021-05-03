import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2149Component } from './test-component2149.component';

describe('TestComponent2149Component', () => {
  let component: TestComponent2149Component;
  let fixture: ComponentFixture<TestComponent2149Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2149Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
