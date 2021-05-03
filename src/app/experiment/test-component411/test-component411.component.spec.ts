import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent411Component } from './test-component411.component';

describe('TestComponent411Component', () => {
  let component: TestComponent411Component;
  let fixture: ComponentFixture<TestComponent411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent411Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
