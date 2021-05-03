import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent518Component } from './test-component518.component';

describe('TestComponent518Component', () => {
  let component: TestComponent518Component;
  let fixture: ComponentFixture<TestComponent518Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent518Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
