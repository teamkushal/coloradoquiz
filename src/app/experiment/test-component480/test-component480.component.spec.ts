import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent480Component } from './test-component480.component';

describe('TestComponent480Component', () => {
  let component: TestComponent480Component;
  let fixture: ComponentFixture<TestComponent480Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent480Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
