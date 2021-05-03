import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3650Component } from './test-component3650.component';

describe('TestComponent3650Component', () => {
  let component: TestComponent3650Component;
  let fixture: ComponentFixture<TestComponent3650Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3650Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
