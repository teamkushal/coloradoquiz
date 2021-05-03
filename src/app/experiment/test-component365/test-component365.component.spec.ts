import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent365Component } from './test-component365.component';

describe('TestComponent365Component', () => {
  let component: TestComponent365Component;
  let fixture: ComponentFixture<TestComponent365Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent365Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
