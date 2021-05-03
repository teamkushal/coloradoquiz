import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent733Component } from './test-component733.component';

describe('TestComponent733Component', () => {
  let component: TestComponent733Component;
  let fixture: ComponentFixture<TestComponent733Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent733Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
