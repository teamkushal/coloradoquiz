import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent523Component } from './test-component523.component';

describe('TestComponent523Component', () => {
  let component: TestComponent523Component;
  let fixture: ComponentFixture<TestComponent523Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent523Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
