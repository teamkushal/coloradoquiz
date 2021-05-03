import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2819Component } from './test-component2819.component';

describe('TestComponent2819Component', () => {
  let component: TestComponent2819Component;
  let fixture: ComponentFixture<TestComponent2819Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2819Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
