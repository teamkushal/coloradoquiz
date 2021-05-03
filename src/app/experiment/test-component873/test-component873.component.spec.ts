import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent873Component } from './test-component873.component';

describe('TestComponent873Component', () => {
  let component: TestComponent873Component;
  let fixture: ComponentFixture<TestComponent873Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent873Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
