import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent484Component } from './test-component484.component';

describe('TestComponent484Component', () => {
  let component: TestComponent484Component;
  let fixture: ComponentFixture<TestComponent484Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent484Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
