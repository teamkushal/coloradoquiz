import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent709Component } from './test-component709.component';

describe('TestComponent709Component', () => {
  let component: TestComponent709Component;
  let fixture: ComponentFixture<TestComponent709Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent709Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
