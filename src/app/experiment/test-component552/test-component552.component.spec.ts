import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent552Component } from './test-component552.component';

describe('TestComponent552Component', () => {
  let component: TestComponent552Component;
  let fixture: ComponentFixture<TestComponent552Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent552Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
