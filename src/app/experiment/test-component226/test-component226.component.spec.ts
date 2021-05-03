import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent226Component } from './test-component226.component';

describe('TestComponent226Component', () => {
  let component: TestComponent226Component;
  let fixture: ComponentFixture<TestComponent226Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent226Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
