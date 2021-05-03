import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent403Component } from './test-component403.component';

describe('TestComponent403Component', () => {
  let component: TestComponent403Component;
  let fixture: ComponentFixture<TestComponent403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent403Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
