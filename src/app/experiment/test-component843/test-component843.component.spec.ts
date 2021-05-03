import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent843Component } from './test-component843.component';

describe('TestComponent843Component', () => {
  let component: TestComponent843Component;
  let fixture: ComponentFixture<TestComponent843Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent843Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
