import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent965Component } from './test-component965.component';

describe('TestComponent965Component', () => {
  let component: TestComponent965Component;
  let fixture: ComponentFixture<TestComponent965Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent965Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
