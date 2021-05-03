import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent819Component } from './test-component819.component';

describe('TestComponent819Component', () => {
  let component: TestComponent819Component;
  let fixture: ComponentFixture<TestComponent819Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent819Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
