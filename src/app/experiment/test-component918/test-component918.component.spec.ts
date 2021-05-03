import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent918Component } from './test-component918.component';

describe('TestComponent918Component', () => {
  let component: TestComponent918Component;
  let fixture: ComponentFixture<TestComponent918Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent918Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
